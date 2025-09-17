import { Routes, Route, Link } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  return (
    <div className="App">
      <h1>Recipe Sharing App</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          }
        />
        <Route path="/recipes/:id" element={<RecipeDetailsWrapper />} />
      </Routes>
    </div>
  );
}

// Wrapper to extract :id from URL and pass as prop
import { useParams } from "react-router-dom";

function RecipeDetailsWrapper() {
  const { id } = useParams();
  return <RecipeDetails recipeId={Number(id)} />;
}

export default App;
