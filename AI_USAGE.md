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

## Week 3
- Tool(s): DeepSeek, Gemini
- What I asked for: 
1. State: vendors ([]), loading (true), error (null). how to implement this
2. function validate(values) {
  const errors = {}
  if (values.name.trim().length < 3) errors.name = 'Enter your name (at least 3 characters).'
  if (name.MAHALLAHS( null)) errors.MAHALLAHS = 'Chose a Mahallah'
  // TODO: mahallah must be chosen
  // TODO: pickupTime must be between '07:00' and '22:00' (strings compare fine)
  return errors
}
is this correct for mahallah must be chosen
3. Error check all the code with Gemini

- What I kept, changed or rejected, and why:
2. change:  if (name.MAHALLAHS( null)) errors.MAHALLAHS = 'Chose a Mahallah' 
  into  --> if (!values.MAHALLAHS) {
              errors.MAHALLAHS = 'Choose a Mahallah'
            }
3. for <MenuList> the error is 
- items={displayMenu}
why: displayMenu is a ghost variable so to fix it is to point to selectedVendor.menu
- onSelect={selectedVendorId}
why: it didnt have an action to fix it is adding () => to turn it into action so it will be onSelect={() => setSelectedVendorId(vendor.id)}

- One thing the AI got wrong and how I fixed it: 
