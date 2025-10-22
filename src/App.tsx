import { HomeScreens } from "./screens/Home";
import { PageWrapper } from "./shared/ui/PageWrapper";

function App() {
  return (
    <PageWrapper>
      <HomeScreens.Hero />
      <HomeScreens.Summary />
    </PageWrapper>
  );
}

export default App;
