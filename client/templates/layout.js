Template.registerHelper('harvardStudent', function(){
  // checks whether current user is registered with a college.harvard.edu email
  return isHarvardStudent();
});