export function Form({submit, datas, setDatas}){

    const handleAmount = (e)=>{
        setDatas({
            ...datas,
            amount: e.target.value
        })
    }

    const handleTeam = (e)=>{
        setDatas({
            ...datas,
            team: e.target.value
        })
    }

    const handleInterest = (e)=>{
        setDatas({
            ...datas,
            rate: e.target.value
        })
    }

    const handleType = (e)=>{
        setDatas({
            ...datas,
            type: e.target.value
        })
    }

    return(
        <form
            onSubmit={submit}
        >
            <div className="fromHader">
                <h3>Mortgage Calculator</h3>
                <a href="#">Clear All</a>
            </div>
            <section>
                <div>
                    <label htmlFor="">Mortgage Amount</label>
                    <input type="text" 
                        onChange={handleAmount}
                    />
                </div>
                <div className="teamRate">
                    <div>
                        <label htmlFor="">Mortgage Team</label>
                        <input type="text" 
                            onChange={handleTeam}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Interest Rate</label>
                        <input type="text" 
                            onChange={handleInterest}
                        />
                    </div>
                </div>
                <div>   
                    <legend>Mortgage Type</legend>
                    <label htmlFor="">
                        <input type="radio" name="type" id="" value='Repayment' onChange={handleType}/>
                        Repayment
                    </label>
                    <label htmlFor="">
                        <input type="radio" name="type" id="" value='Interest Only' onChange={handleType}/>
                        Interest Only
                    </label>
                </div>
            </section>
            <button>
                <img src="" alt="calculator" />
                Calculate Repayment
            </button>
        </form>
    )
}