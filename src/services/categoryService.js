import api from "./api";

// Get All Categories
export const getAllCategories = () => {
    return api.get("/api/categories");
};

// Get Category By Id
export const getCategoryById = (id) => {
    return api.get(`/api/categories/${id}`);
};

// Add Category
export const createCategory = (category) => {
    return api.post("/api/categories", category);
};

// Update Category
export const updateCategory = (id, category) => {
    return api.put(`/api/categories/${id}`, category);
};

// Delete Category
export const deleteCategory = (id) => {
    return api.delete(`/api/categories/${id}`);
};