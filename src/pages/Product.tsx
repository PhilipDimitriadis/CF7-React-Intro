import {useNavigate, useParams} from "react-router";
import {useForm} from "react-hook-form";
import {getProduct, type ProductType, updateProduct, createProduct, productFormSchema} from "@/api/products.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "@/components/ui/input.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Switch} from "@/components/ui/switch.tsx";
import { Button } from "@/components/ui/button";
import {useEffect} from "react";
import {toast} from "sonner";

const Product = () => {
    const {productId} = useParams();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors, isSubmitting},
        reset,
    } = useForm({
        resolver: zodResolver(productFormSchema),
        defaultValues: {
            name: "",
            slug: "",
            description: "",
            image: "",
            price: 0,
            sort: 0,
            is_active: false,
            is_favorite: false,
            category_id: 1      // Default to 1
        }
    });

    const onSubmit = async (data: Omit<ProductType, "id">) => {
        try {
            if(productId) {
                await updateProduct(Number(productId), data)
                toast.success("Product updated successfully.")
            } else {
                await createProduct(data);
                toast.success("Product created successfully.")
            }
            navigate("/products");
        } catch (error) {
            toast.error(
                error instanceof Error ? error.message : "Something went wrong",
            )
        }

    }

    useEffect(() => {
        if (productId) {
            getProduct(Number(productId))
                .then((data) => {
                    // setValue("name", data.name ?? "");

                    const values = {
                        name: data.name ?? "",
                        slug: data.slug ?? "",
                        description: data.description ?? "",
                        image: data.image ?? "",
                        price: data.price ?? 0,
                        sort: data.sort ?? 0,
                        is_active: data.is_active ?? false,
                        is_favorite: data.is_favorite ?? false,
                        category_id: 1
                    }
                    reset(values);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, [productId, reset]);

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-xl mx-auto mt-12 p-8 border rounded-lg space-y-6"
            >
                <h1 className="text-xl font-bold">Edit Product</h1>

                <div>
                    <Label className="mb-1" htmlFor="name">
                        Name
                    </Label>
                    <Input
                       id ="name" {...register("name")}
                    />
                    {errors.name && (
                        <div className="text-cf-dark-red text-sm">{errors.name.message}</div>
                    )}
                </div>

                <div>
                    <Label className="mb-1" htmlFor="slug">
                        Slug
                    </Label>
                    <Input
                        id ="slug" {...register("slug")}
                    />
                    {errors.slug && (
                        <div className="text-cf-dark-red text-sm">{errors.slug.message}</div>
                    )}
                </div>

                <div>
                    <Label className="mb-1" htmlFor="description">
                        Description
                    </Label>
                    <Textarea
                        id ="description" {...register("description")}
                    />
                    {errors.description && (
                        <div className="text-cf-dark-red text-sm">{errors.description.message}</div>
                    )}
                </div>

                <div>
                    <Label className="mb-1" htmlFor="image">
                        Image
                    </Label>
                    <Input
                        id ="image" {...register("image")}
                    />
                    {errors.image && (
                        <div className="text-cf-dark-red text-sm">{errors.image.message}</div>
                    )}
                </div>

                <div>
                    <Label className="mb-1" htmlFor="price">
                        Price
                    </Label>
                    <Input
                        id ="price" {...register("price")}
                    />
                    {errors.price && (
                        <div className="text-cf-dark-red text-sm">{errors.price.message}</div>
                    )}
                </div>

                <div>
                    <Label className="mb-1" htmlFor="sort">
                        Sort
                    </Label>
                    <Input
                        id ="sort" {...register("sort")}
                    />
                    {errors.sort && (
                        <div className="text-cf-dark-red text-sm">{errors.sort.message}</div>
                    )}

                    <div className="flex items-center space-x-2  mt-3">
                        <Switch
                            id ="is-active"
                            checked={watch("is_active")}
                            onCheckedChange={(v) => setValue("is_active", v)}
                        />
                        <Label className="mb-1" htmlFor="is_active">Active</Label>
                    </div>
                    <div className="flex items-center space-x-2 mt-3">
                        <Switch
                            id ="is-favorite"
                            checked={watch("is_favorite")}
                            onCheckedChange={(v) => setValue("is_favorite", v)}
                        />
                        <Label className="mb-1" htmlFor="is-favorite">Favorite</Label>
                    </div>

                    <Button variant="default" type="submit" className="w-full"
                            disabled={isSubmitting}
                    >
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>

                </div>

            </form>
        </>
    )
}

export default Product;