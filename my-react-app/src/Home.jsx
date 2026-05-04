                    <div 
                        className={`toggle-container ${isToggled ? 'active' : ''}`} 
                        onClick={() => setIsToggled(!isToggled)}
                        style={{
                            backgroundColor: isToggled ? '#007bff' : '#ccc',
                            transition: 'background-color 0.3s ease'
                        }}
                    >
                        <div 
                            className="toggle-circle"
                            style={{
                                transform: isToggled ? 'translateX(20px)' : 'translateX(0)',
                                backgroundColor: isToggled ? '#ffffff' : '#007bff',
                                transition: 'transform 0.3s ease, background-color 0.3s ease'
                            }}
                        />
                    </div>