import React from 'react'
import ContentLoader from "react-content-loader"

function Loader() {
    return (

        <ContentLoader
            speed={2}
            width={400}
            height={160}
            viewBox="0 0 400 160"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"

        >
            <rect x="6" y="57" rx="0" ry="0" width="83" height="63" />
            <rect x="105" y="58" rx="0" ry="0" width="83" height="62" />
            <rect x="203" y="57" rx="0" ry="0" width="88" height="64" />
        </ContentLoader>


    )
}

export default Loader
