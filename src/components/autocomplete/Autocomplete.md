```js
<Autocomplete onSelect={console.log} ariaLabelledBy="label">
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