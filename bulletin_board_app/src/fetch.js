// get
const getEndpointUrl = GET_ENDPOINT_URL;

export async function getFetchData() {
  try {
    const response = await fetch(getEndpointUrl, {
      method: "GET",
    });

    const data = await response.json();
    return data;

  } catch (error) {
    console.error(error);
    return [];
  }
}

// post
// export async function postFetchData(
//   title: string,
//   start_date: string,
//   end_date: string,
//   user: number,
// ): Promise<{ data?: typeof Calendar; error?: string }> {
//   console.log({
//     title,
//     start_date,
//     end_date,
//     user,
//   })
//   try {
//     const response = await fetch("/api/events", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         title,
//         start_date,
//         end_date,
//         user,
//       }),
//     });


//     const data = await response.json();
//     if (!response.ok) {
//       throw new Error("Failed to post event data.");
//     }
//     return { data };
//   } catch (error) {
//     if (error instanceof Error) {
//       console.error("POST request failed:", error);
//       return { error: error.message };
//     }
//     return { error: "POSTができませんでした" };
//   }
// }

// // delete
// export async function deleteFetchData(
//   id: number
// ): Promise<{ success?: boolean; data?: any; error?: string }> {
//   try {
//     const response = await fetch(`/api/events/${id}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     const data = await response.json();
//     console.log("DELETEされたデータ(fetch関数内):", data);

//     if (!response.ok) {
//       // サーバーからのレスポンスがエラーの場合、例外をスローします
//       console.error("DELETE操作のエラーレスポンス:", data);
//       throw new Error(
//         data.message ||
//         "イベントの削除に失敗しました。サーバーから不正なレスポンスが返されています。"
//       );
//     }

//     return { success: true, data };
//   } catch (error) {
//     if (error instanceof Error) {
//       console.error("DELETEリクエストに失敗しました:", error.message);
//       return { error: error.message };
//     } else {
//       console.error("予期せぬエラータイプ:", error);
//       return { error: "DELETEに失敗しました" };
//     }
//   }
// }

// // put
// export async function putFetchData(
//   id: number,
//   updatedData: any
// ): Promise<{ success?: boolean; data?: any; error?: string }> {
//   try {
//     const response = await fetch(`/api/events/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updatedData),
//     });
//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(
//         data.message ||
//         "イベントの更新に失敗しました。サーバーから不正なレスポンスが返されています。"
//       );
//     }

//     return { success: true, data };
//   } catch (error) {
//     if (error instanceof Error) {
//       console.error("PUTリクエストに失敗しました:", error);
//       return { error: error.message };
//     }
//     return { error: "PUTに失敗しました" };
//   }
// }
