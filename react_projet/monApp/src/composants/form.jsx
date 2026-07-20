export function FormData(){
    return(
        <form>
            <div className="fromHader">
                <h3>Mortgage Calculator</h3>
                <a href="#">Clear All</a>
            </div>
            <section>
                <div>
                    <label htmlFor="">Mortgage Amount</label>
                    <input type="text" />
                </div>
                <div className="teamRate">
                    <div>
                        <label htmlFor="">Mortgage Team</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Interest Rate</label>
                        <input type="text" />
                    </div>
                </div>
                <div>   
                    <legend>Mortgage Type</legend>
                    <label htmlFor="">
                        <input type="radio" name="" id="" value='Repayment' cheked/>
                        Repayment
                    </label>
                    <label htmlFor="">
                        <input type="radio" name="" id="" value='Interest Only' cheked/>
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