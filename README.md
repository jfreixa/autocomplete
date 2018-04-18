#Autocomplete component



##Props

* **ariaLabelledBy**(*string*): ID of the elements related separated by spaces.
* **items**(*item[]*): List of items to use in autocomplete. 
These items need to have id and name property to correct use of the autocomplete.
* **onSelect**(*(item) => void*): Callback to know when the user selected a item.
* **children**(*(item, active) => React.node*): Required for rendering the items inside the autocomplete

##Task Opinion

I want to give the opinion about this project. First of all, I think the task is nice to see the skills and the way of 
working of the candidate but I will encourage to give the requirements and the styles more detailed.  
In this way will be more easy to do the task and accomplish the needs of the project.
I tried to use some new technologies like **Styled Components**. My opinion about it is that is nicely designed and it's 
easy to use but with this task that has a lot of elements and a lot of required elements, I don't know if it improves
the code. I used **Prettier** and **Eslint** to keep the way of coding in a good way. I didn't use **Flow** because I 
thought that will be too much for a small component.