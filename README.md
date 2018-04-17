#Autocomplete component



##Props

* **ariaLabelledBy**(*string*): ID of the elements related separated by spaces.
* **items**(*{id: string, name: string}[]*): List of items to use in autocomplete. 
These items need to have id and name property to correct use of the autocomplete.
* **onSelect**(*(item) => void*): Callback to know when the user selected a item.
* **children**(*(item, active) => React.node*): Required for rendering the items inside the
autocomplete