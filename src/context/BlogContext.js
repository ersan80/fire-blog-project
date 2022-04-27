import { createContext, useState, useEffect, useContext } from "react";
import app from "../helpers/firebase";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  remove,
  update,
} from "firebase/database";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
  const itemData = [
    {
      id: 1,
      image:
        "data:image/png;base64,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",
      title: "JAVASCRIPT",
      content:
        " JavaScript is a programming language that, along with HTML and CSS, is one of the core technologies of the World Wide Web. More than 97% of websites use client-side JavaScript for web page gestures, and the code used often includes third-party libraries.",
    },
    {
      id: 2,
      image:
        "data:image/png;base64,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",
      title: "HTML",
      content:
        "HyperText Markup Language is the standard text markup language used to create web pages. The latest version of the language is HTML5. HTML cannot be defined as a programming language. Because a program that works by itself cannot be written with HTML codes.",
    },
    {
      id: 3,
      image:
        "data:image/png;base64,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",
      title: "CSS",
      content:
        "Cascading Style Sheets is a markup language that offers extra possibilities in text and format formatting in addition to HTML.",
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0E6Kvo8SZ8LqegeTZHaplYXWGaH1byaHY7rcILZKgrw&s",
      title: "C++",
      content:
        "C++ is a multi-paradigm, widely used, general-purpose programming language that has been developed by Bjarne Stroustrup of Bell Laboratories since 1979. It was originally called C With Classes, and was renamed C++ in 1983.",
    },
    {
      id: 5,
      image:
        "data:image/png;base64,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",
      title: "REACT",
      content:
        "React is an open source javascript library for creating user interfaces. React, which is being developed by a developer group led by Facebook, was created in accordance with the Model-View-Controller principle.",
    },
    {
      id: 6,
      image:
        "data:image/png;base64,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",
      title: "NODE.JS",
      content:
        "Node.js is an open-source, server-side runtime environment for networked applications. Node.js applications are typically developed using JavaScript, a client-side scripting language.",
    },
  ];

  const {user} = useContext(AuthContext)

  const [data, setData] = useState(itemData);

  //*NexBlog Context Data

  const initialValues = {
    title: "",
    image: "",
    content: "",
  };
  const [info, setInfo] = useState(initialValues);

  const AddData = (info) => {
    const database = getDatabase();
    const dataRef = ref(database, "blog");
    const newDataRef = push(dataRef);
    set(newDataRef, {
      title: info.title,
      image: info.image,
      content: info.content,
      userId: user.uid,
      userEmail:user.email
    });
  };
console.log(user);
  const useFetch = () => {
    const [list, setList] = useState();

    useEffect(() => {
      const database = getDatabase();
      const dataRef = ref(database, "blog");
      onValue(dataRef, (snapshot) => {
        const data = snapshot.val();
        const blogArray = [];
        for (let id in data) {
          blogArray.push({ id, ...data[id] });
        }
        setList(blogArray);
      });
    }, []);

    return { list };
  };

  // *Silme

  const DeleteBlog = (id) => {
    const database = getDatabase();
    const dataRef = ref(database, "blog");
    remove(ref(database, "blog/" + id));
  };

  // ** Update

  const dataBlog = (id, title, image, content) => {
    setInfo({ id, title, image, content });
  };

  const updateBlog = (info) => {
    console.log(info)
    const database = getDatabase();
    const updates = {};
    updates["blog/" + info.id] = info;
    return update(ref(database), updates);
  };

  return (
    <BlogContext.Provider
      value={{
        data,
        info,
        setInfo,
        useFetch,
        setData,
        DeleteBlog,
        dataBlog,
        updateBlog,
        AddData,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
