const Layout = ({ children }) => {
    return (
        <div>
            <div>
                <div>
                    Navigation bar
                </div>
                <div>{children}</div>
            </div>
        </div>
    )
}

export default Layout