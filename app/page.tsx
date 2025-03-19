import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navbar } from "../components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SquarePen, Trash2 } from "lucide-react";

export default function Home() {
  return (
    <main className="flex w-full items-center justify-center">
      <div className="flex items-center w-full justify-center p-4 flex-col gap-16 max-w-[1280px]">
        <Navbar />
        <div className="flex flex-col gap-12 w-full h-full">
          {/* STATUS */}
          <Tabs className="w-full flex items-center gap-8" defaultValue="all">
            <TabsList className="">
              <TabsTrigger value="all">ALL</TabsTrigger>
              <TabsTrigger value="active">ACTIVE</TabsTrigger>
              <TabsTrigger value="pending">PENDING</TabsTrigger>
              <TabsTrigger value="completed">COMPLETED</TabsTrigger>
            </TabsList>
            <div className="flex justify-between w-full">
              <h1 className="text-2xl font-medium">TASKS</h1>
              <Button>Add to list</Button>
            </div>
            <TabsContent value="all" className="w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Task name</TableHead>
                    <TableHead>Task date</TableHead>
                    <TableHead>Task status</TableHead>
                    <TableHead>Edit</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>name</TableCell>
                    <TableCell>2025.06.21</TableCell>
                    <TableCell>completed</TableCell>
                    <TableCell className="flex gap-2">
                      <Button className="bg-gray-300 text-black">
                        <SquarePen />
                      </Button>
                      <Button className="bg-red-500">
                        <Trash2 />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="active">active list should be here</TabsContent>
            <TabsContent value="pending">
              pending list should be here
            </TabsContent>
            <TabsContent value="completed">
              completed list should be here
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
}
