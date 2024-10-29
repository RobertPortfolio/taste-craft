
export default class EdamamService {

    _apiId = '8d254a40';
    _apiKey = 'af08fa96e7cafedc3b1bc788b2a4b768';
    _apiBase = 'https://api.edamam.com/search';
    _uriBase = 'http://www.edamam.com/ontologies/edamam.owl#recipe_';

    getResource = async (url) => {
        try{
            const res = await fetch(url);

            if(!res.ok){
              throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
            }
            return await res.json();
            //return data.hits.map(hit => hit.recipe);
        } catch (error) {
            console.error(error);
            return [];
        }
    };

    getRecipes = async (query) => {
        const res = await this.getResource(`${this._apiBase}?q=${query}&app_id=${this._apiId}&app_key=${this._apiKey}&from=0&to=100`);
        return res.hits.map(hit => hit.recipe);
    };

    findRecipe = async (query) => {
        const res = await this.getResource(`${this._apiBase}?q=${query}&app_id=${this._apiId}&app_key=${this._apiKey}&from=0&to=20`);
        return res.hits.map(hit => hit.recipe);
    };

    getRecipe = async (query, id) => {
      const res = await this.findRecipe(query);
      const customuri = this._uriBase + id;
      const recipe = res.find((recipe) => recipe.uri === customuri); // Используем find
      if (recipe) {
        return recipe;
      }
      return null; // Если ничего не найдено
    };

}