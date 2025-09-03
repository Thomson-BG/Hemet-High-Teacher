import { subcategories } from '../data/subcategories';

describe('Subcategories Data', () => {
  test('Facilities category exists', () => {
    expect(subcategories).toHaveProperty('Facilities');
    expect(Array.isArray(subcategories.Facilities)).toBe(true);
  });

  test('Facilities category contains Work Order Form with correct URL', () => {
    const facilitiesCategory = subcategories.Facilities;
    const workOrderForm = facilitiesCategory.find(item => item.name === 'Work Order Form');
    
    expect(workOrderForm).toBeDefined();
    expect(workOrderForm.url).toBe('https://docs.google.com/forms/d/1egF2C0dt99YyconCc70qQvLcrC3nHxlYXLrZ9dr0omM/edit#:~:text=https%3A//docs.google.com/forms/d/e/1FAIpQLSdIA2cZb9bHME7UX9jCCjNpIYQGnqNGhKGvtXevA7CT8PjLDA/viewform%3Fusp%3Dsf_link');
  });

  test('Facilities category contains Facilities Request Form with correct URL', () => {
    const facilitiesCategory = subcategories.Facilities;
    const facilitiesRequestForm = facilitiesCategory.find(item => item.name === 'Facilities Request Form');
    
    expect(facilitiesRequestForm).toBeDefined();
    expect(facilitiesRequestForm.url).toBe('https://forms.gle/V6VnafdWX4FMUqDaA');
  });

  test('Facilities category has exactly 2 subcategories', () => {
    expect(subcategories.Facilities).toHaveLength(2);
  });

  test('Check for duplicate Work Order Form entries', () => {
    const allWorkOrderForms = [];
    
    Object.keys(subcategories).forEach(category => {
      subcategories[category].forEach(item => {
        if (item.name === 'Work Order Form') {
          allWorkOrderForms.push({ category, item });
        }
      });
    });

    // Document that there are currently 2 Work Order Form entries
    expect(allWorkOrderForms).toHaveLength(2);
    expect(allWorkOrderForms.map(entry => entry.category)).toEqual(
      expect.arrayContaining(['Facilities', 'Forms'])
    );
  });
});