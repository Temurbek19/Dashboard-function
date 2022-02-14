import TicketsTable from './TicketsTable';

import './TicketsItem.scss';

const TicketsItem = () => {
    return(
        <div className="tickets-item">
            {
                TicketsTable.map((item) => {
                    return (
                        <div className="tickets-item_table">
                            <div className="detalis">
                                <img src={item.imgLink} alt="imgLink" />
                                <div className="detalis2">
                                    <h5>{item.jop}</h5>
                                    <h6>{item.lastLive}</h6>
                                </div>
                            </div>
                            <div className="customer">
                                <h5>{item.name}</h5>
                                <h6>{item.customerData}</h6>
                            </div>
                            <div className="date">
                                <h5>{item.dateDay}</h5>
                                <h6>{item.dateHour}</h6>
                            </div>
                            <div className="priority">
                                <h3 className={`priority2 
                                    ${item.priority === 'High' ? 'high' : ''}
                                    ${item.priority === 'low' ? 'low' : ''}
                                    ${item.priority === 'Normal' ? 'normal' : ''}
                                    `}>{item.priority}</h3>
                                <img src={item.more} alt="more-vertical" />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default TicketsItem;