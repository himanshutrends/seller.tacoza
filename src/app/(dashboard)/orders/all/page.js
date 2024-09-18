import OrderTable  from "./data";
import { getOrders } from "@/lib/orders/getOrder";

export default async function Dashboard({ searchParams }) {
  const response = await getOrders();

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Orders</h1>
      </div>
      <OrderTable searchParams={searchParams} data={response} />
    </main>
  );
}
