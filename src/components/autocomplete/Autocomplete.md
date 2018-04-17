```js
const items = [
    {
      "id": "323",
      "name": "Harriet McKinney",
      "lastName": "McKinney",
      "firstName": "Harriet",
      "email": "harriet.mckinney@kinetar.com"
    },
    {
      "id": "139",
      "name": "Harriet Banks",
      "lastName": "Banks",
      "firstName": "Harriet",
      "email": "harriet.banks@kinetar.com"
    },
    {
      "id": "142",
      "name": "Mathilda Summers",
      "lastName": "Summers",
      "firstName": "Mathilda",
      "email": "mathilda.summers@kinetar.com"
    },
    {
      "id": "140",
      "name": "Eugene Wong",
      "lastName": "Wong",
      "firstName": "Eugene",
      "email": "eugene.wong@kinetar.com"
    },
    {
      "id": "340",
      "name": "New Manager",
      "lastName": "Manager",
      "firstName": "New",
      "email": "manager@kinetar.com"
    },
    {
      "id": "145",
      "name": "Marguerite Ryan",
      "lastName": "Ryan",
      "firstName": "Marguerite",
      "email": "marguerite.ryan@kinetar.com"
    },
    {
      "id": "171",
      "name": "Donald Butler",
      "lastName": "Butler",
      "firstName": "Donald",
      "email": "donald.butler@kinetar.com"
    },
    {
      "id": "151",
      "name": "Jim Carlson",
      "lastName": "Carlson",
      "firstName": "Jim",
      "email": "jim.carlson@kinetar.com"
    },
    {
      "id": "141",
      "name": "Alta Maxwell",
      "lastName": "Maxwell",
      "firstName": "Alta",
      "email": "alta.maxwell@kinetar.com"
    }
];

<Autocomplete onSelect={console.log} ariaLabelledBy="label" items={items}>
    {(item) => (
      <Item
          name={item.name}
          firstName={item.firstName}
          lastName={item.lastName}
          email={item.email}
      />
    )}
</Autocomplete>
```