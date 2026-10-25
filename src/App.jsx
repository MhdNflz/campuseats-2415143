import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import MenuList from './components/MenuList.jsx'
import VendorCard from './components/VendorCard.jsx'
import { Loading, ErrorMessage } from './components/Status.jsx'
import CartPage from './components/CartPage.jsx'

function App() {
  const [selectedVendorId, setSelectedVendorId] = useState(null)
  const [cart, setCart] = useState([]) //lines of {item,qty}
  const [view, setView] = useState('menu')
  const [lastOrder, setLastOrder] = useState(null)
  

  const [vendors, setVendors] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [reloadKey, setReloadKey] = useState(0)

  useEffect (() => {
    const controller = new AbortController()

    //for reset before every attempt
    setLoading(true)
    setError(null)

    fetch('/api/vendors.json', { signal: controller.signal})
    .then((res) => {  //to check res.ok
      if (!res.ok) throw new Error(`HTTP ${res.status}`) //``
      return res.json()
    })
    .then((data) => {
      setVendors(data)
      setSelectedVendorId((current) => current ?? data[0]?.id ?? null) // to select first vendor when data arrives
    })
    .catch((err) => {
      if (err.name !== 'AbortError') setError(err.message)
    })
    .finally(() => {
      if (!controller.signal.aborted) setLoading(false)
    })

    return () => controller.abort()
  }, [reloadKey])

  const cartCount = cart.reduce((sum,line) => sum + line.qty, 0)
  const selectedVendor = vendors.find((vendor) => vendor.id === selectedVendorId)

  function handleAddToCart(item) {
    setCart((prev) => {
      const existing = prev.find((line) => line.item.id === item.id)
        if (existing) {
          return prev.map((line) =>
            line.item.id === item.id ? { ...line, qty: line.qty + 1 } : line
          )
        }
      return [...prev, { item, qty: 1 }]
    })
  }

  function handleChangeQty(itemId, delta) {
    setCart((prev) => {
      return prev
      .map((line) =>
        line.item.id === itemId ? { ...line, qty: line.qty + delta } : line
      )
      .filter((line) => line.qty > 0)
    })
  }

  function handleRemove(itemId) {
    setCart((prev) => prev.filter((line) => line.item.id !== itemId))
  }

  function handlePlaceOrder(details) {
    const total=cart.reduce((sum, line) => sum + line.item.price * line.qty, 0) 
    setLastOrder({ ...details, total })
    setCart([])
    setView('done')
  }

  let content
  if (view === 'cart') {
    content = (
      <CartPage 
        cart={cart} 
        onChangeQty={handleChangeQty}
        onRemove={handleRemove} 
        onPlaceOrder={handlePlaceOrder} 
      />
    )
  } else if (view === 'done') {
    content = (
      <div className="card">
        <h2>Order placed</h2>
        <p>
          Thank you, {lastOrder.name}. Pick up at {lastOrder.pickupTime}
          (Mahallah {lastOrder.mahallah}). Total RM {lastOrder.total.toFixed(2)}.
        </p>
        <button className="btn" onClick={() => setView('menu')}>Back to menus</button>
      </div>
    ) 
  } else if (loading) {
    content = <Loading />
  } else if (error) {
    content = <ErrorMessage message={error} onRetry={() => setReloadKey((k) => k + 1)} />
  } else if (selectedVendor) {
    content = (
      <>
        <section>
          <h2 className="section-title">Choose a vendor</h2>
          <div className="vendor-grid">
            {vendors.map((vendor) => (
              <VendorCard 
                key={vendor.id} 
                vendor={vendor} 
                isSelected={vendor.id === selectedVendorId} //fix using DeepSeek
                onSelect={() => setSelectedVendorId(vendor.id)}
              />
            ))}
          </div>
        </section>

        <section>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <h2 className="section-title">Menu: {selectedVendor.name}</h2>

          </div>

          <MenuList
            items={selectedVendor.menu}
            onAdd={handleAddToCart} 
          />
        </section>
      </>
    )
  }
  
  return (
    <>
        <Header cartCount={cartCount}
          onShowMenu={() => setView('menu')}
          onShowCart={() => setView('cart')} 
        />
        <main className="container">
          {content}
        </main>
        <Footer />
    </>
  )
}

export default App