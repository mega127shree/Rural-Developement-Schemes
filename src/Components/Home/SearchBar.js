import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { items } from './AutoSuggestion';
const SearchBar = () => {
    
      const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
      }
    const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
      }
    
      const handleOnSelect = (item) => {
        // the item selected
        console.log(item)

      }
    
      const handleOnFocus = () => {
        console.log('Focused')
      }
    
      const formatResult = (item) => {
        return (
          <>
            <span style={{ display: 'block', textAlign: 'left',fontSize:"16px" }}>{item.name}</span>
          </>
        )
      }
    
      return(
            <div className="Search">
                <div style={{ width: 400 }}>
                    <ReactSearchAutocomplete
                    items={items}
                    onSearch={handleOnSearch}
                    onHover={handleOnHover}
                    onSelect={handleOnSelect}
                    onFocus={handleOnFocus}
                    autoFocus
                    formatResult={formatResult}
                    placeholder="Search a scheme"
                    />
                </div>
            </div>
      )
}
 
export default SearchBar;