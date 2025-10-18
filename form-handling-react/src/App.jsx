import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FormikForm from "./components/formikForm";
import RegistrationForm from "./components/RegistrationForm";
import PostsComponents from "../../react-query-demo/src/PostsComponent";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <RegistrationForm />
        <FormikForm />
        <PostsComponents />
      </div>
    </QueryClientProvider>
  );
}

export default App;
