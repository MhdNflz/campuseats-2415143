# AI usage log

Using AI never costs marks; a vague or missing log does.
Add a new section every week, before you tag. Did not use AI? Write "None" under Tool(s).

## Week 1
- Tool(s): DeepSeek
- What I asked for: 
1. let say component name is Thing, to declare thing object with name and location do u use const?
2. what is nav?
- What I kept, changed or rejected, and why: none
- One thing the AI got wrong and how I fixed it: none

## Week 2
- Tool(s): DeepSeek
- What I asked for: 
1.  function handleAddToCart(item) {
    setCart((prevCart) => [...prevCart, item])   // a NEW array, never cart.push()}
    where to put this in App.jsx
- What I kept, changed or rejected, and why: 
1. function App() {
  const [selectedVendorId, setSelectedVendorId] = useState(vendors[0].id)
  const selectedVendor = vendors.find((v) => v.id === selectedVendorId)
  const [cart, setCart] = useState([])

// move the handleAddToCart function inside App function
  function handleAddToCart(item) {
    setCart((prevCart) => [...prevCart, item])
  }
  .
  .
}
- One thing the AI got wrong and how I fixed it: none
