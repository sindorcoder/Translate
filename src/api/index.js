useEffect(() => {
     const loadData = async () => {
       try {
         const response = await fetch(
           "https://google-translator9.p.rapidapi.com/v2",
           {
             method: "POST",
             headers: {
               "x-rapidapi-key":
                 "75cf7c8231mshf19a5aafcaa6d72p14e4adjsn215ca0739fa4",
               "x-rapidapi-host": "google-translator9.p.rapidapi.com",
               "Content-Type": "application/json",
             },
             body: JSON.stringify({
               q: text,
               source: source,
               target: target,
             }),
           }
         );
         const data = await response.json();
         setData(data);
       } catch (error) {
         console.log(error);
       }
     };
 
     if (text && source && target) {
       loadData();
     }
   }, [text, source, target]);
 