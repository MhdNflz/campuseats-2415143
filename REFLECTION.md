# Week 1 reflection

Answer each question in 1–3 sentences, in your own words.

1. What is the difference between building a UI imperatively (plain DOM code) and declaratively (React)?
The difference is with imperative you need to handle every DOM change by hand which can be quite a hassle while with declarative you can change the only part you want to change without a need to touch the DOM. 

2. Why must a component name start with a capital letter?
The purpose is to differentiate between the custom component that we created with a real HTML tag.

3. What does a fragment <>...</> do, and why not just use a <div>?
Fragment <> function is kind of same with <div> which is group multiple element but the different is <div> a real DOM node where it create keeps in memory while <> is not. This mean <> can be use inside <ul>, <table> or flex container without breaking the layout while <div> will break it because of the extra box.

4. Name one benefit of splitting the UI into small components.
By split it into small component can make the component more reusable.