
import { Toaster } from "react-hot-toast"
import MainLayouts from "./layouts/MainLayouts"
import { useAppDispatch } from "./redux/hook";
import { setUser } from "./redux/features/user/userSlice";
import { useEffect } from "react";




function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Check if user data exists in local storage
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      dispatch(setUser(parsedUserData.email));
    }
  }, [dispatch]);

  return (
    <>
      <MainLayouts />

      <Toaster />
    </>
  )
}

export default App
