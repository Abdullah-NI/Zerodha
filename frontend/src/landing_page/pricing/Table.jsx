import './pricing.css'
function Table({head1="ww",head2="ww",brokerage=["ww","ww"],stt=["ww","ww"],transaction=["ww","ww"],gst=["ww","ww"],sebi=["ww","ww"],stamp=["ww","ww"]}) {
    return (
        <div className="container-md pricingP  p-5">
            <table className='mytable'>
                <thead>
                    <tr>
                        <th ></th>
                        <th colSpan="3" className='text-muted'>{head1}</th>
                        <th colSpan="3" className='text-muted'>{head2}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Brokerage</td>
                        <td colSpan="3">{brokerage[0]}</td>
                        <td colSpan="3">{brokerage[1]}</td>
                    </tr>
                    <tr>
                        <td>STT/CTT</td>
                        <td colSpan="3">{stt[0]}</td>
                        <td colSpan="3">{stt[1]}</td>
                    </tr>
                    <tr>
                        <td>Transaction charges</td>
                        <td colSpan="3">{transaction[0]}</td>
                        <td colSpan="3">{transaction[1]}</td>
                    </tr>
                    <tr>
                        <td>GST</td>
                        <td colSpan="3">{gst[0]}</td>
                        <td colSpan="3">{gst[1]}</td>
                    </tr>
                    <tr>
                        <td>SEBI charges</td>
                        <td colSpan="3">{sebi[0]}</td>
                        <td colSpan="3">{sebi[1]}</td>
                    </tr>
                    <tr>
                        <td>Stamp charges</td>
                        <td colSpan="3">{stamp[0]}</td>
                        <td colSpan="3">{stamp[1]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Table;