import { Selector } from 'testcafe';

fixture`Getting Started`
  .page`http://localhost:3000`;

  function selectByDataTestId(id) {
    return Selector('*').withAttribute('data-test-id', id);
  }

test('Should not join if form is not valid', async t => {
  const username = 'John Doe';
  const jobtitle = 'My job';

  const createUserDialog = selectByDataTestId('create-user-dialog');
  const createUserDialogExists = createUserDialog.exists;

  const userNameInput = selectByDataTestId('username');
  const userNameInputExists = userNameInput.exists;

  const userJobInput = selectByDataTestId('jobtitle');
  const userJobInputExists = userJobInput.exists;

  const avatar = selectByDataTestId('avatar');
  const avatarsExists = avatar.exists;

  const submitButton = selectByDataTestId('submit');
  const submitButtonExists = submitButton.exists;

  await t
    .expect(createUserDialogExists).ok()
    .expect(submitButtonExists).ok()
    .click(submitButton)
    .expect(createUserDialogExists).ok()

    .typeText(userNameInput, username)

    .click(submitButton)
    .expect(createUserDialogExists).ok()

    .typeText(userJobInput, jobtitle)

    .click(submitButton)
    .expect(createUserDialogExists).ok()
});

test('Should create new user', async t => {
  const username = 'John Doe';
  const jobtitle = 'My job';

  const createUserDialog = selectByDataTestId('create-user-dialog');
  const createUserDialogExists = createUserDialog.exists;

  const userNameInput = selectByDataTestId('username');
  const userNameInputExists = userNameInput.exists;

  const userJobInput = selectByDataTestId('jobtitle');
  const userJobInputExists = userJobInput.exists;

  const avatar = selectByDataTestId('avatar');
  const avatarsExists = avatar.exists;

  const submitButton = selectByDataTestId('submit');
  const submitButtonExists = submitButton.exists;

  await t
    .expect(createUserDialogExists).ok()

    .expect(userNameInputExists).ok()
    .typeText(userNameInput, username)

    .expect(userJobInputExists).ok()
    .typeText(userJobInput, jobtitle)

    .expect(avatarsExists).ok()
    .click(avatar)
    .expect(avatar.hasClass('active')).ok()

    .expect(submitButtonExists).ok()
    .click(submitButton)
    .expect(createUserDialogExists).notOk();
});
