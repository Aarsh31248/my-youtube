import Body from "./components/Body";
import Head from "./components/Head";
import VideoContainer from "./components/VideoContainer";
import WatchPage from "./components/WatchPage";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <VideoContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);


function App() {
  return (
    <Provider store={store}>
      <div className="h-screen overflow-hidden">
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
