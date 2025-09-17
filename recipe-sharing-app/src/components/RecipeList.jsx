import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  useEffect(() => {
    filterRecipes();
  }, [searchTerm, recipes, filterRecipes]);

  // Show filtered if searching, else all
  const displayRecipes = searchTerm.trim() !== "" ? filteredRecipes : recipes;

  return (
    <div>
      {displayRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        displayRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </h3>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
