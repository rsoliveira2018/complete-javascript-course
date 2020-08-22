import Search from './models/Search';

/* 
///// Global State of the Application
/// Search object
/// Current recipe object
/// Shopping list object
/// Liked recipes
*/
const state = {}

const controlSearch = async () => {
    // 1. Get the query from the view
    const query = 'pizza'; // TODO (change it later for dynamic input)

    if (query) {
        // 2. New search object and add it to the state
        state.search = new Search(query);

        // 3. Prepare UI for results

        // 4. Search for recipes
        await state.search.getResults();

        // 5. Render the results on the UI
        console.log(state.search.result);
    }

};

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
})

// const search = new Search('pizza');
// console.log(search);
// search.getResults();