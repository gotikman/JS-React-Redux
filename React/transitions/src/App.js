
//! useDeferredValue  - оптимізовує рендер при великій кількості динамічних елементів

// import data from './data';
// import { useState, useMemo, useDeferredValue } from 'react';

// function App() {
//     const [text, setText] = useState('');
//     const [posts, setPosts] = useState(data);

//     const defferedValue = useDeferredValue(text);                                      //!

//     const filteredPosts = useMemo(() => {
//         return posts.filter(item => item.name.toLowerCase().includes(defferedValue));  //!
//     }, [defferedValue, posts]);

//     const onValueChange = (e) => {
//         setText(e.target.value);
//     }

//     return (
//         <>
//             <input value={text} type='text' onChange={onValueChange} />

//             <hr />

//             <div>
//                 {filteredPosts.map(post => (
//                     <div key={post._id}>
//                         <h4>{post.name}</h4>
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// }

// export default App;

// =====================================================================
//! useTransition  - оптимізовує рендер виликої к-ті динамічних елем., + показує наприклад spiner
//? isPending - flag який дозволяє відслідковувати стан переходу
//? startTransition - запускає перехід

import data from './data';
import { useState, useMemo, useTransition } from 'react';

function App() {
    const [text, setText] = useState('');
    const [posts, setPosts] = useState(data);

    const [isPending, startTransition] = useTransition();        //!


    const filteredPosts = useMemo(() => {
        return posts.filter(item => item.name.toLowerCase().includes(text));
    }, [text, posts]);

    const onValueChange = (e) => {
        startTransition(() => {                                     //!
            setText(e.target.value);
        });
    }

    return (
        <>
            <input value={text} type='text' onChange={onValueChange} />

            <hr />

            <div>
                {isPending ? <h4>Loading...</h4> :
                    filteredPosts.map(post => (
                        <div key={post._id}>
                            <h4>{post.name}</h4>
                        </div>
                    ))}
            </div>
        </>
    );
}

export default App;
