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