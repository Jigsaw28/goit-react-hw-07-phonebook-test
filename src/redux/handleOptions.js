export const handlePending =({contacts}, action) => {
  contacts.isLoading = true;
}

export const handleFulfilledGet = ({contacts}, action) => {
  contacts.isLoading = false;
  contacts.error = null;
  contacts.items = action.payload;
}

export const handleFulfilledAdd = ({contacts}, action) => {
  contacts.isLoading = false;
  contacts.error = null;
  contacts.items.push(action.payload);
}

export const handleFulfilledDelete = ({contacts}, action) => {
  contacts.isLoading = false;
  contacts.error = null;
  contacts.items = contacts.items.filter(
    contact => contact.id !== action.payload.id
  );
}

export const handleRejected = ({contacts}, action) => {
  contacts.isLoading = false;
  contacts.error = action.payload;
}