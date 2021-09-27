import Head from 'next/head'

export default function Layout(props) {
    return (
        <div>
           <Head>
               <title>{props.title}</title>
               <meta name="description" content={props.description} />
               <meta name="keywords" content={props.keywords} />
               </Head> 
               {props.children}
        </div>
    )
}

Layout.defaultProps ={
    title: "edna page for clasical books",
    description: "find the latest classical books",
    keywords: "books,authors,year published"
}