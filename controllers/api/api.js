app.post("/submit", ({body}, res) => {
    const user = new User(body);
    user.setFullName();
    user.lastUpdatedDate();
  
    User.create(user)
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  });
  