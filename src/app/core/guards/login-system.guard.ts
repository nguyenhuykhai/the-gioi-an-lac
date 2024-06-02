import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const loginSystemGuard: CanActivateFn = (route, state) => {
    const router: Router = inject(Router);

    // Check if localStorage is supported
    if (typeof localStorage === 'undefined') {
        router.navigate(['/']);
        return false; // Prevent navigation
    }

    let isLogged: boolean = localStorage.getItem('isLogged') === 'true';

    if (!isLogged) {
        router.navigate(['/']);
        return false; // Prevent navigation
    }

    return true;
};
