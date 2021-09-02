# QuocoSolar README

Remote change to README file.

<% if(typeof alert != 'undefined') { %>
    <% alert.forEach(function(error) { %>
        <div class="error-prompt">
            <strong><% error.msg %></strong>
        </div>
    <% }) %>
<% } %>

<% Object.keys(errors.errors).forEach(function(error) { %>
    <div class="error-prompt">
        <strong>Error: (not reading the error). Perhaps only display them one at a time lol <% error.msg %></strong>
    </div>
<% }) %>

<% for (var i=0; i<errors.errors.length; i++) { %>
    <% var msg = errors.errors[i].msg %>
<% } %>

# Nodemailer
const output = `
<p>Thank you for booking.</p>
<h3>Details</h3>
<ul>
    <li>Name: ${data.first_name} ${data.last_name}</li>
    <li>Email: ${data.email}</li>
    <li>Telephone: ${data.telephone}</li>
    <li>Date: ${date_start}</li>
</ul>
`;

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
    // host: "smtp.gmail.com",
    service: 'gmail',
    // port: 587,
    // secure: false,
    auth: {
        user: 'pvmingfordays@gmail.com',
        pass: 'Geno2002',
    },
    tls: {
        rejectUnauthorized: false
    }
});

// send mail with defined transport object
var mailOptions = {
    from: '"QuocoSolar" <pvmingfordays@gmail.com>', // sender address
    to: "oliverxingugreen@gmail.com", // list of receivers
    subject: "Node Email Test", // Subject line
    text: "Hello world?", // plain text body
    html: output, // html body
};

transporter.sendMail(mailOptions, function(err, info) {
    if (err) console.log(err);
    else console.log('Email sent: ' + info.response);
});