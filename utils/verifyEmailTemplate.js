const verifyEmailTemplate = ({name,url})=>{
    return `
<p>Dear ${name}</p>
<p>Thank you for registering Blinkeyit.</p>
<a href=${url} style = "color:black;backgound : orange;margin-top :10px,padding:20px,display:block">
    Verfiy Email
</a>
`
}

export default verifyEmailTemplate