## Services:

In order to provide this framework, I need to create a to-do list

  - items will have an ID
  - items will have a USERNAME
  - items will have a PROJECT NAME
  - items will have a DESCRIPTION BODY
  - items will have a COMPLETED state
  - (items will have a TSHIRT SIZE)
  - (items will have a CRITICAL/NONCRITICAL state)
  - (items will have a NOTE TAKING SECTION)
  - (items will have a shortcut which adds a date and a bullet point to the note taking section)

sample_project = {
  id: 0,
  username: 'isaac_lee'
  tickets: [
    id: 0,
    completed: true,
    user_description_body: 'Finish Todo list',
    (where_to_find_requirements): [
          'http://www.some-place-i-work/requirements-for-this-one-thing',
          'http://www.some-other-place/requirements-for-this-one-thing',
          'http://www.some-word-document/requirements-for-this-one-thing',
    ],
    (tshirt-size): 'L'
    (resources): [
      'http://www.cool-resource-i-found.com/how-to-solve-this-one-problem',
      'http://www.cool-resource-i-found.com/how-to-solve-this-one-problem',
      'http://www.cool-resource-i-found.com/how-to-solve-this-one-problem',
    ],
    id: 1,
    completed: false
    user_description_body: 'Finish ',
    (where_to_find_requirements): [
          'http://www.some-place-i-work/requirements-for-this-one-thing',
          'http://www.some-other-place/requirements-for-this-one-thing',
          'http://www.some-word-document/requirements-for-this-one-thing',
    ],
    (resources): [
      'http://www.cool-resource-i-found.com/how-to-solve-this-one-problem',
      'http://www.cool-resource-i-found.com/how-to-solve-this-one-problem',
      'http://www.cool-resource-i-found.com/how-to-solve-this-one-problem',
    ]
    (tshirt-size): 'L'
  ]

}

### To-Do List ROUTES
  - GET item by project id
  - PUT item by item id
  - DELETE item by item id

In order to provide this framework, I need to create a form which creates a Project with a TODO list

  - projects will have an ID
  - projects will have a USERNAME they bleong to
  - projects will have a
  - I will need to create