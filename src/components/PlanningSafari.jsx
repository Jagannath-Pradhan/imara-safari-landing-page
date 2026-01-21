import { useState } from 'react';

const PlanningSafari = () => {
    const [selectedYear, setSelectedYear] = useState(2026);
    const [selectedMonths, setSelectedMonths] = useState([]);

    const months = [
        'Jan', 'Feb', 'Mar', 'Apr',
        'May', 'Jun', 'Jul', 'Aug',
        'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const toggleMonth = (month) => {
        if (selectedMonths.includes(month)) {
            setSelectedMonths(selectedMonths.filter(m => m !== month));
        } else {
            setSelectedMonths([...selectedMonths, month]);
        }
    };

    const changeYear = (direction) => {
        setSelectedYear(prev => direction === 'next' ? prev + 1 : prev - 1);
    };

    return (
        <section className="planning-safari-section py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-4">
                        <h1 className="text-capitalize" style={{ 
                            fontSize: '2rem', 
                            fontWeight: '600',
                            color: '#212529'
                        }}>
                            4. When Are You Planning Your Safari?
                        </h1>
                        <p style={{ 
                            fontSize: '1.1rem',
                            color: '#6c757d'
                        }}>
                            Please let us know your travel dates. If they are not yet fixed, please provide your approximate travel period.
                        </p>
                    </div>
                </div>
                
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6">
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '20px',
                            marginBottom: '20px'
                        }}>
                            <button 
                                onClick={() => changeYear('prev')}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '1.5rem',
                                    cursor: 'pointer',
                                    color: '#d87028'
                                }}
                            >
                                «
                            </button>
                            <h2 style={{
                                margin: 0,
                                fontSize: '1.5rem',
                                fontWeight: '600',
                                color: '#d87028'
                            }}>
                                {selectedYear}
                            </h2>
                            <button 
                                onClick={() => changeYear('next')}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '1.5rem',
                                    cursor: 'pointer',
                                    color: '#d87028'
                                }}
                            >
                                »
                            </button>
                        </div>
                        
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: '15px',
                            maxWidth: '500px',
                            margin: '0 auto'
                        }}>
                            {months.map((month, index) => (
                                <button
                                    key={month}
                                    onClick={() => toggleMonth(month)}
                                    style={{
                                        padding: '20px',
                                        fontSize: '1rem',
                                        fontWeight: '500',
                                        border: '2px solid #e0e0e0',
                                        borderRadius: '8px',
                                        background: selectedMonths.includes(month) ? '#d87028' : '#fff',
                                        color: selectedMonths.includes(month) ? '#fff' : '#212529',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                        textAlign: 'center'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!selectedMonths.includes(month)) {
                                            e.target.style.borderColor = '#d87028';
                                            e.target.style.background = '#f8f9fa';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!selectedMonths.includes(month)) {
                                            e.target.style.borderColor = '#e0e0e0';
                                            e.target.style.background = '#fff';
                                        }
                                    }}
                                >
                                    {month}
                                </button>
                            ))}
                        </div>
                        
                        {selectedMonths.length > 0 && (
                            <div style={{
                                marginTop: '30px',
                                padding: '20px',
                                background: '#f8f9fa',
                                borderRadius: '8px',
                                textAlign: 'center'
                            }}>
                                <p style={{ 
                                    margin: 0, 
                                    color: '#495057',
                                    fontSize: '1rem'
                                }}>
                                    <strong>Selected Period:</strong> {selectedMonths.sort((a, b) => 
                                        months.indexOf(a) - months.indexOf(b)
                                    ).join(', ')} {selectedYear}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PlanningSafari;