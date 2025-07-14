export class ContactSubmission {
  static async create(formData) {
    // Mock implementation - replace with your actual backend integration
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Contact form submitted:', formData);
        resolve({ success: true });
      }, 1000);
    });
  }
}