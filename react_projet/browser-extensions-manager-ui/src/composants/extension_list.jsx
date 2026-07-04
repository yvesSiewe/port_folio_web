import { Card } from "./card"

const datas = [
    {
        name:'DevLens',
        descriptions: 'Quickly inspect page layouts and visualize element boundaries',
        active: true,
        imglink: '../composants/assets/logo-devlens.svg'
    }
]

function ExtensionList(){
    function handleAll(){

    }

    function handleActive(){

    }

    function handleInactive(){
        
    }
    return(
        <main>
            <div>
                <h1>Extentions List</h1>
                <section>
                    <button onClick={handleAll()}>All</button>
                    <button onClick={handleActive()}>Active</button>
                    <button onClick={handleInactive()}>Inactive</button>
                </section>
            </div>

            <div>
                {datas.map((data) => {
                    <Card
                        key={data.name}
                        props={data}
                    />
                })}
            </div>
        </main>
        
    )
}

export default ExtensionList