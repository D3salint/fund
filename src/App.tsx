import { HomeScreens } from "./screens/Home";
import { PageWrapper } from "./shared/ui/PageWrapper";
import { RegisterGsapPlugins } from "./shared/ui/RegisterGsapPlugins";

function App() {
  return (
    <PageWrapper>
      <div className="size-10 shrink-0 text-white relative z-50" />
      <HomeScreens.Hero />
      <HomeScreens.Summary />
      <RegisterGsapPlugins />
    </PageWrapper>
  );
}

export default App;
