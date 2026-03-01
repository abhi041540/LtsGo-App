import React from "react";

function Error()
{
    const styles = {
        body: {
            backgroundColor: '#d5442a',
            color: 'white',
            fontFamily: 'Arial, sans-serif',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            margin: 0,
            padding:"20px"
        },
        container: {
            textAlign: 'center'
        },
        heading: {
            fontSize: '4em',
            marginBottom: '0.5em'
        },
        paragraph: {
            fontSize: '1.5em'
        },
        link: {
            color: 'gold',
            textDecoration: 'none',
            fontWeight: 'bold'
        }
    };

    return (
        <div style={styles.body}>
            <div style={styles.container}>
                <h1 style={styles.heading}>Oops!</h1>
                <p style={styles.paragraph}>It looks like you've taken a wrong turn.</p>
                <p style={styles.paragraph}>Don't worry, it happens to the best of us. Let's get you back on track.</p>
                <p><a href="/" style={styles.link}>Go to Homepage</a></p>
            </div>
        </div>
    );
}

export default Error;