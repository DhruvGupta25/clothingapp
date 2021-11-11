import React from "react";
import { useNavigate } from "react-router";

export const withRouter = (Component)=>{
    const WrappedComponent = (props)=>{
        const navigate = useNavigate();
        return <Component navigate={navigate} {...props} />;
    };
    return WrappedComponent;
};