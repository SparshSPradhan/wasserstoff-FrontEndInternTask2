interface RegistrationData {
    avatar: File | null;
    fullName: string;
    email: string;
    githubUsername: string;
  }
  
  export const validateRegistration = (data: RegistrationData): Partial<RegistrationData> => {
    const errors: Partial<RegistrationData> = {};
  
    // Full Name validation
    if (!data.fullName || data.fullName.trim().length < 2) {
      errors.fullName = 'Please enter a valid full name';
    }
  
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
      errors.email = 'Please enter a valid email address';
    }
  
    // GitHub Username validation
    const githubUsernameRegex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
    if (!data.githubUsername || 
        !githubUsernameRegex.test(data.githubUsername.replace('@', ''))) {
      errors.githubUsername = 'Please enter a valid GitHub username';
    }
  
    // Avatar validation (optional)
    // if (data.avatar) {
    //   const maxSize = 500 * 1024; // 500KB
    //   const allowedTypes = ['image/jpeg', 'image/png'];
  
    //   if (!allowedTypes.includes(data.avatar.type)) {
    //     errors.avatar = 'Only JPEG and PNG files are allowed';
    //   }
  
    //   if (data.avatar.size > maxSize) {
    //     errors.avatar = 'File size must be less than 500KB';
    //   }
    // }
  
    return errors;
  };