import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="container text-center mt-5">
            <div className="jumbotron bg-light p-5">
                <h1 className="display-4 animated fadeIn">Welcome to CollabTool</h1>
                <p className="lead animated fadeIn" style={{ animationDelay: '0.5s' }}>
                    CollabTool is your go-to platform for seamless real-time collaboration. 
                    Work together on documents, share ideas, and communicate effortlessly with your team.
                </p>
                <hr className="my-4" style={{ borderTop: '2px solid #000' }} />
                <p className="animated fadeIn" style={{ animationDelay: '1s' }}>
                    Whether you're working on a team project or just need to organize your thoughts, 
                    CollabTool offers all the features you need to stay productive.
                </p>
                <div className="mt-4">
                    <Link to="/register" className="btn btn-primary btn-lg me-3 animated pulse" style={{ animationDuration: '1s' }}>Register</Link>
                    <Link to="/login" className="btn btn-danger btn-lg animated pulse" style={{ animationDuration: '1s' }}>Login</Link>
                </div>
            </div>
            <div className="mt-5">
                <h2>Key Features</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Real-Time Collaboration</h5>
                                <p className="card-text">Work on documents together in real-time, making collaboration easier than ever.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Seamless Communication</h5>
                                <p className="card-text">Chat with your team in-app and share ideas instantly.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Task Management</h5>
                                <p className="card-text">Organize your projects with easy-to-use task management features.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;

