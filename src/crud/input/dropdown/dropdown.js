import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './actions';
import './style.css';
export default function Dropdown({ name, source, value }) {
  const state = useSelector(state => state);
  const { open } = state.dropdown;
  const items = state.dropdown[name] ? state.dropdown[name].items : [];
  const { metaData } = state.crud;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.setInitialValue({ item: value, objectName: name }));
  }, []);

  function handleFocusDropdown() {
    dispatch(
      actions.focusDropdown({
        objectName: name,
        defaultProperty: metaData.find(m => m.objectName === source)
          .defaultProperty
      })
    );
  }

  function handleSelectItem(e) {
    const { id } = e.target;
    const item = items && items.find(i => i._id === id);
    dispatch(actions.selectDropdownItem({ item, objectName: name }));
  }

  return (
    <div className='dropdown-container'>
      <input
        className='dropdown-input'
        onFocus={handleFocusDropdown}
        data-testid={`dropdown-input-${name}`}
        // value={item && item[defaultProperty]}
        readOnly
      />
      {open[name] && (
        <div className='dropdown-list-container'>
          <div className='filter-input-container'>
            <input className='filter-input' placeholder='search...' />
          </div>
          <div className='list'>
            <ui>
              {items &&
                items.map(item => {
                  return (
                    <li
                      className='dropdown-list-item'
                      key={item._id}
                      id={item._id}
                      onClick={handleSelectItem}
                    >
                      {item['defaultProperty']}
                    </li>
                  );
                })}
            </ui>
          </div>
        </div>
      )}
    </div>
  );
}
