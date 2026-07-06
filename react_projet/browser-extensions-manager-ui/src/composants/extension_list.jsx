import { Card } from "./card"
import { ButtonList } from "./buttonlist"
import { useState } from "react"

const originalDatas = [
    {
        name:'DevLens',
        descriptions: 'Quickly inspect page layouts and visualize element boundaries',
        active: true,
        imglink: '../src/assets/logo-devlens.svg'
    },
    {
        name: 'StyleSpy',
        descriptions: 'Instantly analyze and copy css from any web page',
        active: true,
        imglink: '../src/assets/logo-style-spy.svg'
    },
    {
        name: 'SpeedBoost',
        descriptions: 'Optimizes browser resource usage to accelerate page loading',
        active: false,
        imglink: '../src/assets/logo-speed-boost.svg'
    },
    {
        name: 'jSONWizard',
        descriptions: 'Formates, validates, and prettifies jSON response in-browzer',
        active: true,
        imglink: '../src/assets/logo-json-wizard.svg'
    },
    {
        name: 'TabMaster pro',
        descriptions: 'Organizes browser tabs into groups and sessions',
        active: true,
        imglink: '../src/assets/logo-tab-master-pro.svg'
    },
    {
        name: 'ViewportBuddy',
        descriptions: 'Simulates various screen resolutions directly within the browser',
        active: false,
        imglink: '../src/assets/logo-viewport-buddy.svg'
    },
    {
        name: 'Markup Notes',
        descriptions: 'Enables annotation and notes directly onto webpages for collaborative debugging',
        active: true,
        imglink: '../src/assets/logo-markup-notes.svg'
    },
    {
        name: 'GridGuides',
        descriptions: 'Overlay customizable grids and alignment guides on any webpage.',
        active: false,
        imglink: '../src/assets/logo-grid-guides.svg'
    },
    {
        name: 'Palette Picker',
        descriptions: 'Instantly extracts color palettes from any webpages',
        active: true,
        imglink: '../src/assets/logo-palette-picker.svg'
    },
    {
        name: 'LinkChecker',
        descriptions: 'Scans and hightlights broken links on any page',
        active: true,
        imglink: '../src/assets/logo-link-checker.svg'
    },
    {
        name: 'DOM Snapshot',
        descriptions: 'Capture and export DOM strucures quickly',
        active: false,
        imglink: '../src/assets/logo-dom-snapshot.svg'
    },
    {
        name: 'ConsolePlus',
        descriptions: 'Enhances developer console with advanced filtering and logging',
        active: true,
        imglink: '../src/assets/logo-console-plus.svg'
    },
];

function ExtensionList({mode}){

    const [datas, setDatas] = useState(originalDatas);
    const [filter, setFilter] = useState('All');
    
    const filterDatas = datas.filter((data)=>{
        if(filter == 'Active') return data.active === true;
        if(filter == 'Inactive') return data.active === false;
        return true
    })

    function handlechangeData(name){
        setDatas(prevDatas => {
            return prevDatas.map(data => data.name == name ? {...data, active: !data.active} : data)
        })
    }

    function handleRemove(name){
        setDatas(prevDatas => {
            return prevDatas.filter(data => data.name !== name)
        })
    }

    return(
        <main 
            style={{
                marginTop: '3rem',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
            }}
        >
            <div className="navExtensions"
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <h2 style={!mode ? {color: 'white'} : {color: 'black'}}>Extentions List</h2>
                <section
                    style={{
                        display: 'flex',
                        gap: '.5rem'
                    }}
                >
                    <ButtonList
                        handlefunction={() => setFilter('All')}
                        state={filter == 'All'}
                        mode={mode}
                    >All</ButtonList>
                    <ButtonList 
                        handlefunction={() => setFilter('Active')}
                        state={filter == 'Active'}
                        mode={mode}
                    >Active</ButtonList>
                    <ButtonList
                        handlefunction={() => setFilter('Inactive')}
                        state={filter == 'Inactive'}
                        mode={mode}
                    >Inactive</ButtonList>
                </section>
            </div>

            <div className="container" style={{
                    display: 'flex', 
                    flexWrap: 'wrap',
                    flexGrow: 1,
                    gap: '10px',
                }}>
                {filterDatas.map((data) => (
                    <Card
                        key={data.name}
                        data={data}
                        mode={mode}
                        ontoggle={() => handlechangeData(data.name)}
                        handleRemove={()=> handleRemove(data.name)}
                    />
                ))}
            </div>
        </main>
        
    )
}

export default ExtensionList