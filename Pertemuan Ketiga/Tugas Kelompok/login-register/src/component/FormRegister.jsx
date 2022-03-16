import React from 'react';
import './FormRegister.css';

const FormRegister = () => {
    return (
        <div className="container">
            <h3 className="text-center"><strong>Form Register</strong></h3>
                <div className="form-login">
                    <h2  className="text-center"><strong>Tugas Pertemuan Ketiga</strong></h2>
                    <br></br>
                    <form>
                    <div className="form-group row">
                            <label for="username" class="col-sm-3 col-form-label">Name</label>
                            <div class="col-sm-9">
                                <input type="email" class="form-control" id="username" placeholder="Masukkan Nama"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="username" class="col-sm-3 col-form-label">Username</label>
                            <div class="col-sm-9">
                                <input type="email" class="form-control" id="username" placeholder="Masukkan Username"/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="password" class="col-sm-3 col-form-label">Password</label>
                                <div class="col-sm-9">
                                    <input type="password" class="form-control" id="password" placeholder="Masukkan Password"/>
                                </div>
                        </div>

                        <div className="form-group row">
                            <label for="password" class="col-sm-3 col-form-label">Ulangi Password</label>
                                <div class="col-sm-9">
                                    <input type="password" class="form-control" id="password" placeholder="Masukkan Password"/>
                                </div>
                        </div>

                        {/* button login*/}
                        <button type="submit" className="btn btn-success btn-block">Login</button>
                                        
                        {/* checkbox */}
                        <br></br>
                        <div className="text-center">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" />
                                        Remember me
                                </label>
                        </div>

                        {/* button cancel */}
                        <br></br>
                        <div className="text-center">
                            <button type="button" className="btn btn-danger">Cancel</button>
                        </div>
                    </form>
                </div>
        </div>
    )
}
export default FormRegister;