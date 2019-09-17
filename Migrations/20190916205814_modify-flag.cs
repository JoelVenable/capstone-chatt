using Microsoft.EntityFrameworkCore.Migrations;

namespace Chatt.Migrations
{
    public partial class modifyflag : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "34a1f5b3-d3a0-4f46-b83b-32d37dc51421");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c68fe0f3-a1bb-470d-ae04-37d4f78116a7");

            migrationBuilder.AddColumn<bool>(
                name: "IsModified",
                table: "Messages",
                nullable: false,
                defaultValue: false);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "8805d27a-2a37-4af8-9f8b-b3a46154ad22", "9426dd28-ea88-4346-8106-cb2ce88d9235", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "8a3d02b9-6e2a-40af-8654-101a5d0a4a07", "6571b9b4-c78d-452e-91d7-b6c661566bb5", "ChatUser", "CHATUSER" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8805d27a-2a37-4af8-9f8b-b3a46154ad22");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8a3d02b9-6e2a-40af-8654-101a5d0a4a07");

            migrationBuilder.DropColumn(
                name: "IsModified",
                table: "Messages");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "c68fe0f3-a1bb-470d-ae04-37d4f78116a7", "8e8a78ff-e08d-491f-a7ac-d6a61eca721a", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "34a1f5b3-d3a0-4f46-b83b-32d37dc51421", "405c90d1-2ae4-46c6-9907-d4435b234c58", "ChatUser", "CHATUSER" });
        }
    }
}
